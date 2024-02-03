import { CustomIcon } from '@components/ui/custom-icon';
import { SEO } from './seo';

export function Placeholder(): JSX.Element {
  return (
    <main className='flex min-h-screen items-center justify-center'>
      <SEO
        title='PurrLife'
        description='From majestic leaps and cozy nap spots to the mysterious world of cat behavior, dive into the full story of our feline friends` lives. Experience all the purrfect moments and whisker-twitching commentary, one paw at a time.'
        image='/home.png'
      />
      <i>
        <CustomIcon
          className='h-20 w-20 text-[#1DA1F2]'
          iconName='TwitterIcon'
        />
      </i>
    </main>
  );
}
