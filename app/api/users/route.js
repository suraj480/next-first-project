import { NextResponse } from "next/server";

export function GET(request) {
  const users = [
    { name: "suraj maurya", phone: "234", course: "next" },
    { name: "ritul mohanty", phone: "9393", course: "java" },
    { name: "poorna panda", phone: "12345", course: "react" },
  ];
  return NextResponse.json(users);
}
export function POST() {}
export function DELETE(request) {
  console.log("delete api called")
  return NextResponse.json({
    message:"deleted !!",
    status:true
  })
}
export function PUT() {}
