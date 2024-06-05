import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
    return (
        <>
            <div className='flex justify-center items-center h-screen'>
                <SignIn />
            </div>
            <div className='hidden bg-muted lg:block'>
                <div className='w-full h-screen bg-gradient-to-r from-blue-800 to-indigo-900 flex flex-col gap-2 justify-center items-center'>
                    <h1
                        style={{
                            textShadow: '4px 4px 1px rgb(99 102 241 / 0.5)',
                        }}
                        className='text-5xl text-primary-foreground font-medium tracking-tight'>
                        TaskWise
                    </h1>
                    <h2 className='text-2xl text-primary-foreground/20 font-semibold'>
                        Start organizing your tasks today
                    </h2>
                </div>
            </div>
        </>
    );
}
