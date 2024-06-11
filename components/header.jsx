import { ModeToggle } from '@/components/mode-toggle.jsx';
import { UserButton } from '@clerk/nextjs';

const Header = () => {
    return (
        <div className='flex justify-end px-6 md:px-18 lg:px-36 items-center mb-12 bg-muted/40 h-[5rem]'>
            <div className='flex items-center gap-4'>
                <UserButton
                    showName={true}
                    afterSignOutUrl='/sign-in'
                />
                <ModeToggle />
            </div>
        </div>
    );
};

export default Header;
