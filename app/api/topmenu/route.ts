import { NextRequest, NextResponse } from "next/server";
import { sleep } from "@/app/lib/sleep";

export async function GET(req: NextRequest) {
  await sleep(3000);

  return NextResponse.json({
    result: {
      type: "array",
      content: [
        {
          title: "공지사항",
          content: [
            {
              seq: 1,
              user: "관리자",
              view: 0,
              date: "1일 전",
              title: "테스트 입니다. 1",
              vote: 0,
              commentCount: 0,
            },
            {
              seq: 2,
              user: "관리자",
              view: 0,
              date: "2일 전",
              title: "테스트 입니다. 2",
              vote: 0,
              commentCount: 0,
            },
            {
              seq: 3,
              user: "관리자",
              view: 0,
              date: "3일 전",
              title: "테스트 입니다. 3",
              vote: 0,
              commentCount: 0,
            },
            {
              seq: 4,
              user: "관리자",
              view: 0,
              date: "4일 전",
              title: "테스트 입니다. 4",
              vote: 0,
              commentCount: 0,
            },
            {
              seq: 5,
              user: "관리자",
              view: 0,
              date: "5일 전",
              title: "테스트 입니다. 5",
              vote: 0,
              commentCount: 0,
            },
          ],
        },
        {
          title: "지식",
          content: [
            {
              seq: 1,
              user: "관리자",
              view: 0,
              date: "1일 전",
              title: "테스트 입니다. 1",
              vote: 0,
              commentCount: 0,
            },
            {
              seq: 2,
              user: "관리자",
              view: 0,
              date: "2일 전",
              title: "테스트 입니다. 2",
              vote: 0,
              commentCount: 0,
            },
            {
              seq: 3,
              user: "관리자",
              view: 0,
              date: "3일 전",
              title: "테스트 입니다. 3",
              vote: 0,
              commentCount: 0,
            },
            {
              seq: 4,
              user: "관리자",
              view: 0,
              date: "4일 전",
              title: "테스트 입니다. 4",
              vote: 0,
              commentCount: 0,
            },
            {
              seq: 5,
              user: "관리자",
              view: 0,
              date: "5일 전",
              title: "테스트 입니다. 5",
              vote: 0,
              commentCount: 0,
            },
          ],
        },
        {
          title: "QnA",
          content: [
            {
              seq: 1,
              user: "관리자",
              view: 0,
              date: "1일 전",
              title: "테스트 입니다. 1",
              vote: 0,
              commentCount: 0,
            },
            {
              seq: 2,
              user: "관리자",
              view: 0,
              date: "2일 전",
              title: "테스트 입니다. 2",
              vote: 0,
              commentCount: 0,
            },
            {
              seq: 3,
              user: "관리자",
              view: 0,
              date: "3일 전",
              title: "테스트 입니다. 3",
              vote: 0,
              commentCount: 0,
            },
            {
              seq: 4,
              user: "관리자",
              view: 0,
              date: "4일 전",
              title: "테스트 입니다. 4",
              vote: 0,
              commentCount: 0,
            },
            {
              seq: 5,
              user: "관리자",
              view: 0,
              date: "5일 전",
              title: "테스트 입니다. 5",
              vote: 0,
              commentCount: 0,
            },
          ],
        },
        {
          title: "커뮤니티",
          content: [
            {
              seq: 1,
              user: "관리자",
              view: 0,
              date: "1일 전",
              title: "테스트 입니다. 1",
              vote: 0,
              commentCount: 0,
            },
            {
              seq: 2,
              user: "관리자",
              view: 0,
              date: "2일 전",
              title: "테스트 입니다. 2",
              vote: 0,
              commentCount: 0,
            },
            {
              seq: 3,
              user: "관리자",
              view: 0,
              date: "3일 전",
              title: "테스트 입니다. 3",
              vote: 0,
              commentCount: 0,
            },
            {
              seq: 4,
              user: "관리자",
              view: 0,
              date: "4일 전",
              title: "테스트 입니다. 4",
              vote: 0,
              commentCount: 0,
            },
            {
              seq: 5,
              user: "관리자",
              view: 0,
              date: "5일 전",
              title: "테스트 입니다. 5",
              vote: 0,
              commentCount: 0,
            },
          ],
        },
      ],
    },
    code: "S0000",
    message: "성공",
  });
}
