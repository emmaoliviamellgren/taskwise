import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
    return (
        <>
            <div className='flex justify-center items-center h-screen'>
                <SignIn />
            </div>
            <div className='hidden bg-muted lg:block'>
                <div className='w-full h-screen bg-gradient-to-r from-slate-900 to-slate-700 flex flex-col gap-2 justify-center items-center'>
                    <h1
                        style={{
                            textShadow: '2px 2px 4px rgb(99 102 241 / 0.5)',
                        }}
                        className='text-5xl text-primary-foreground font-bold tracking-tight'>
                        TaskWise
                    </h1>
                    <h2 className='text-2xl text-primary-foreground font-medium tracking-tight'>
                        Start organizing your tasks today
                    </h2>
                    <p className='absolute bottom-6 text-sm font-medium text-slate-400'>
                        Built with ♥ by
                        <a
                            href='https://emmamellgren.vercel.app/'
                            className='ml-1 transition-all duration-300 hover:text-primary-foreground focus-visible:text-primary'
                            target='_blank'
                            rel='noreferrer noopener'>
                            Emma Mellgren
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
}
