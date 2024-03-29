import { NextRequest, NextResponse } from 'next/server';
import { sleep } from '@/app/lib/sleep';

export async function GET(req: NextRequest) {
  await sleep(1000);
  // await sleep(30000);

  return NextResponse.json({
    result: {
      type: 'array',
      content: [
        {
          title: '공지사항',
          content: [
            {
              seq: 1,
              user: '관리자',
              view: 2,
              date: '1일 전',
              title: '1 테스트 입니다. 테스트 입니다. 테스트 입니다.',
              vote: 3,
              commentCount: 4,
            },
            {
              seq: 2,
              user: '관리자',
              view: 3,
              date: '2일 전',
              title:
                ' 2테스트 입니다. 테스트 입니다. 테스트 입니다. 테스트 입니다.',
              vote: 4,
              commentCount: 5,
            },
            {
              seq: 3,
              user: '관리자',
              view: 4,
              date: '3일 전',
              title:
                '3 테스트 입니다. 테스트 입니다. 테스트 입니다. 테스트 입니다. 테스트 입니다.',
              vote: 5,
              commentCount: 6,
            },
            {
              seq: 4,
              user: '관리자',
              view: 5,
              date: '4일 전',
              title:
                '4 테스트 입니다. 테스트 입니다. 테스트 입니다. 테스트 입니다. 테스트 입니다. 테스트 입니다.',
              vote: 6,
              commentCount: 7,
            },
            {
              seq: 5,
              user: '관리자',
              view: 6,
              date: '5일 전',
              title:
                '5 테스트 입니다. 테스트 입니다. 테스트 입니다. 테스트 입니다. 테스트 입니다. 테스트 입니다. 테스트 입니다.',
              vote: 7,
              commentCount: 0,
            },
          ],
        },
        {
          title: '지식',
          content: [
            {
              seq: 1,
              user: '관리자',
              view: 2,
              date: '1일 전',
              title: '1 테스트 입니다. 테스트 입니다. 테스트 입니다.',
              vote: 3,
              commentCount: 4,
            },
            {
              seq: 2,
              user: '관리자',
              view: 3,
              date: '2일 전',
              title:
                ' 2테스트 입니다. 테스트 입니다. 테스트 입니다. 테스트 입니다.',
              vote: 4,
              commentCount: 5,
            },
            {
              seq: 3,
              user: '관리자',
              view: 4,
              date: '3일 전',
              title:
                '3 테스트 입니다. 테스트 입니다. 테스트 입니다. 테스트 입니다. 테스트 입니다.',
              vote: 5,
              commentCount: 6,
            },
            {
              seq: 4,
              user: '관리자',
              view: 5,
              date: '4일 전',
              title:
                '4 테스트 입니다. 테스트 입니다. 테스트 입니다. 테스트 입니다. 테스트 입니다. 테스트 입니다.',
              vote: 6,
              commentCount: 7,
            },
            {
              seq: 5,
              user: '관리자',
              view: 6,
              date: '5일 전',
              title:
                '5 테스트 입니다. 테스트 입니다. 테스트 입니다. 테스트 입니다. 테스트 입니다. 테스트 입니다. 테스트 입니다.',
              vote: 7,
              commentCount: 0,
            },
          ],
        },
        {
          title: 'QnA',
          content: [
            {
              seq: 1,
              user: '관리자',
              view: 2,
              date: '1일 전',
              title: '1 테스트 입니다. 테스트 입니다. 테스트 입니다.',
              vote: 3,
              commentCount: 4,
            },
            {
              seq: 2,
              user: '관리자',
              view: 3,
              date: '2일 전',
              title:
                ' 2테스트 입니다. 테스트 입니다. 테스트 입니다. 테스트 입니다.',
              vote: 4,
              commentCount: 5,
            },
            {
              seq: 3,
              user: '관리자',
              view: 4,
              date: '3일 전',
              title:
                '3 테스트 입니다. 테스트 입니다. 테스트 입니다. 테스트 입니다. 테스트 입니다.',
              vote: 5,
              commentCount: 6,
            },
            {
              seq: 4,
              user: '관리자',
              view: 5,
              date: '4일 전',
              title:
                '4 테스트 입니다. 테스트 입니다. 테스트 입니다. 테스트 입니다. 테스트 입니다. 테스트 입니다.',
              vote: 6,
              commentCount: 7,
            },
            {
              seq: 5,
              user: '관리자',
              view: 6,
              date: '5일 전',
              title:
                '5 테스트 입니다. 테스트 입니다. 테스트 입니다. 테스트 입니다. 테스트 입니다. 테스트 입니다. 테스트 입니다.',
              vote: 7,
              commentCount: 0,
            },
          ],
        },
        {
          title: '커뮤니티',
          content: [
            {
              seq: 1,
              user: '관리자',
              view: 2,
              date: '1일 전',
              title: '1 테스트 입니다. 테스트 입니다. 테스트 입니다.',
              vote: 3,
              commentCount: 4,
            },
            {
              seq: 2,
              user: '관리자',
              view: 3,
              date: '2일 전',
              title:
                ' 2테스트 입니다. 테스트 입니다. 테스트 입니다. 테스트 입니다.',
              vote: 4,
              commentCount: 5,
            },
            {
              seq: 3,
              user: '관리자',
              view: 4,
              date: '3일 전',
              title:
                '3 테스트 입니다. 테스트 입니다. 테스트 입니다. 테스트 입니다. 테스트 입니다.',
              vote: 5,
              commentCount: 6,
            },
            {
              seq: 4,
              user: '관리자',
              view: 5,
              date: '4일 전',
              title:
                '4 테스트 입니다. 테스트 입니다. 테스트 입니다. 테스트 입니다. 테스트 입니다. 테스트 입니다.',
              vote: 6,
              commentCount: 7,
            },
            {
              seq: 5,
              user: '관리자',
              view: 6,
              date: '5일 전',
              title:
                '5 테스트 입니다. 테스트 입니다. 테스트 입니다. 테스트 입니다. 테스트 입니다. 테스트 입니다. 테스트 입니다.',
              vote: 7,
              commentCount: 0,
            },
          ],
        },
      ],
    },
    code: 'S0000',
    message: '성공',
  });
}
