"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function Page() {
  return (
    <div className="mx-auto p-8 flex flex-row justify-between w-5/6">
      <Card className="border-0">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">Sign In</CardTitle>
          <CardDescription className="text-center">
            Good to see you again
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="email@example.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
          <div className="flex items-start gap-4">
            <Button>Sign In</Button>
          </div>
        </CardContent>
      </Card>

      <Card className="border-0">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">Sign In</CardTitle>
          <CardDescription className="text-center">
            Good to see you again
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="email@example.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
          <div className="flex items-start gap-4">
            <Button>Sign In</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Page
