import { SignIn } from '@clerk/nextjs';

const Page = () => {
    return <SignIn path='/sign-in' />;
}

export default Page;