import { NextResponse } from "next/server";
//DELETE request function
export function DELETE(request) {
    console.log("delete api called")
    return NextResponse.json({
      message:"Testing delete",
      status:true
    })
  }