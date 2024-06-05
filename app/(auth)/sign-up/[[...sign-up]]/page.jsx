import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
    <>
        <div className='flex justify-center items-center h-screen'>
            <SignUp />
        </div>
        <div className='hidden bg-muted lg:block'>
            <Image
                src={loginImg}
                alt='Image'
                width='1920'
                height='1080'
                className='h-full w-full object-cover dark:brightness-[0.2] dark:grayscale'
            />
        </div>
    </>;
}
