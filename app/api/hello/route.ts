// GET /api/hello
export async function GET() {
    return Response.json({ message: 'Hello World' })
}

// // POST /api/hello
// // request.json()으로 body를 읽는다. json()은 Promise를 반환하므로 await 필요
// export async function POST(request: Request) {
//     const body = await request.json()
//     return Response.json({ received: body }, { status: 201 })
// }

// // PUT /api/hello
// // 리소스 전체를 교체할 때 사용
// export async function PUT(request: Request) {
//     const body = await request.json()
//     return Response.json({ updated: body })
// }

// // DELETE /api/hello
// // body 없이 상태 코드만 반환하는 경우가 많다
// export async function DELETE() {
//     return new Response(null, { status: 204 })
// }