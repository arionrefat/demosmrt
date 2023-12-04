"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
      <Card>
        <CardHeader>
          <CardTitle>Team Members</CardTitle>
          <CardDescription>
            Invite your team members to collaborate.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="flex items-center justify-between space-x-4">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="/avatars/01.png" />
                <AvatarFallback>OM</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium leading-none">Sofia Davis</p>
                <p className="text-sm text-muted-foreground">m@example.com</p>
              </div>
            </div>
            <div>
              <div className="flex items-start gap-4">
                <Button>Sign In</Button>
                <Button>Sign In</Button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between space-x-4">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="/avatars/02.png" />
                <AvatarFallback>JL</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium leading-none">Jackson Lee</p>
                <p className="text-sm text-muted-foreground">p@example.com</p>
              </div>
            </div>
            <div>
              <div className="flex items-start gap-4">
                <Button>Sign In</Button>
                <Button>Sign In</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Page
