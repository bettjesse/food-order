import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Separator } from "./ui/separator"
import { Button } from "./ui/button"

const MobileNav = () => {
  return (
    <Sheet>
        <SheetTrigger>
            <Menu className=" text-orange-500"/>
        </SheetTrigger>
        <SheetContent>
            <SheetTitle>
                <span>Welcome to MunchMate</span>
            </SheetTitle>
            <Separator/>
            <SheetDescription className=" flex">
            <Button></Button>
            </SheetDescription>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav