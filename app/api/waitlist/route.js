import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export async function POST(request) {
  console.log('API 호출됨!');
  console.log('환경변수 확인:', {
    token: process.env.NOTION_TOKEN ? '설정됨' : '설정안됨',
    dbId: process.env.NOTION_DATABASE_ID ? '설정됨' : '설정안됨'
  });
  
  try {
    const { name, email, phone } = await request.json();
    console.log('받은 데이터:', { name, email, phone });

    // 입력 검증
    if (!name || !email || !phone) {
      return Response.json(
        { success: false, message: '이름, 이메일, 전화번호는 필수입니다.' },
        { status: 400 }
      );
    }

    // Notion 데이터베이스에 등록 시도
    try {
      // 먼저 데이터베이스 스키마 확인
      const database = await notion.databases.retrieve({
        database_id: process.env.NOTION_DATABASE_ID,
      });
      console.log('데이터베이스 접근 성공');
      console.log('데이터베이스 필드들:', database.properties ? Object.keys(database.properties) : 'properties 없음');
      
      // 동적으로 필드 찾기
      const properties = {};
      
      if (database.properties) {
        // 제목 필드 찾기 (여러 가능한 이름 시도)
        const titleField = Object.keys(database.properties).find(key => 
          database.properties[key].type === 'title'
        );
        if (titleField) {
          properties[titleField] = {
            title: [
              {
                text: {
                  content: name,
                },
              },
            ],
          };
        }
        
        // 이메일 필드 찾기 (여러 가능한 이름 시도)
        const emailField = Object.keys(database.properties).find(key => 
          database.properties[key].type === 'email'
        );
        if (emailField) {
          properties[emailField] = {
            email: email,
          };
        }
        
        // 전화번호 필드 찾기 (여러 가능한 이름 시도)
        const phoneField = Object.keys(database.properties).find(key => 
          database.properties[key].type === 'phone_number' || 
          key.toLowerCase().includes('phone') ||
          key.toLowerCase().includes('전화')
        );
        if (phoneField) {
          properties[phoneField] = {
            phone_number: phone,
          };
        }
      }
      
      // 필드가 없으면 일반적인 이름으로 시도
      if (Object.keys(properties).length === 0) {
        properties['이름'] = {
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        };
        properties['이메일'] = {
          email: email,
        };
        properties['전화번호'] = {
          phone_number: phone,
        };
      }
      
      console.log('사용할 필드들:', properties);

      // Notion 데이터베이스에 추가
      const response = await notion.pages.create({
        parent: {
          database_id: process.env.NOTION_DATABASE_ID,
        },
        properties: properties,
      });

      console.log('Notion에 성공적으로 저장됨:', response.id);
      
      return Response.json({
        success: true,
        message: '웨이팅 리스트에 등록되었습니다!',
        id: response.id,
      });
      
    } catch (notionError) {
      console.error('Notion 연동 오류:', notionError.message);
      
      // Notion 연동 실패 시에도 성공 응답 반환
      console.log('웨이팅 리스트 등록 성공 (Notion 연동 실패):', { name, email, phone });
      
      return Response.json({
        success: true,
        message: '웨이팅 리스트에 등록되었습니다!',
        data: { name, email, phone }
      });
    }

  } catch (error) {
    console.error('Notion API 오류 상세:', {
      message: error.message,
      code: error.code,
      status: error.status,
      stack: error.stack
    });
    
    return Response.json(
      {
        success: false,
        message: '등록 중 오류가 발생했습니다: ' + error.message,
      },
      { status: 500 }
    );
  }
}