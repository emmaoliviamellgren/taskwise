import { ModeToggle } from '@/components/mode-toggle.jsx';
import { UserButton } from '@clerk/nextjs';

const Header = () => {
    return (
        <div className='flex justify-between px-6 md:px-18 lg:px-36 items-center mb-12 bg-muted/40 h-[5rem]'>
            <div>
                <h1 className='text-2xl font-bold text-secondary-foreground/70'>TaskWise</h1>
            </div>
            <div className='flex gap-4'>
                <ModeToggle />
                <UserButton />
            </div>
        </div>
    );
};

export default Header;
