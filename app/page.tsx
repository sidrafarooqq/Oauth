import { SessionWrapper } from "@/components/SessionWrapper";
import SignInPage from "@/components/login/LoginComponent";
import SignOutPage from "@/components/login/SignOutComponent";
import { auth } from "@/lib/session";

export default async function Home() {
    const session = await auth()
    const  isAuthenticated = !!session?.user

    return(
        <div>
            <SessionWrapper>
            {isAuthenticated? <SignOutPage/> :<SignInPage/>}
            </SessionWrapper>
        </div>
    )
}