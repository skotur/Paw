import cn from 'clsx';

type IconName = keyof typeof Icons;

type IconProps = {
  className?: string;
};

type CustomIconProps = IconProps & {
  iconName: IconName;
};

const Icons = {
  PinIcon,
  AppleIcon,
  PinOffIcon,
  GoogleIcon,
  TwitterIcon,
  FeatherIcon,
  SpinnerIcon,
  TriangleIcon
};

export function CustomIcon({
  iconName,
  className
}: CustomIconProps): JSX.Element {
  const Icon = Icons[iconName];

  return <Icon className={className ?? 'h-6 w-6'} />;
}

function TwitterIcon({ className }: IconProps): JSX.Element {
  return (
<svg 
  viewBox='0 0 500 500' 
  className={cn('fill-current', className)}
>
<g id='XMLID_2_'>
	<path id='XMLID_9_' d='M294.5,395.5c-9.4-0.3-17.9-1.4-26.2-3.6c-9.2-2.4-18.6-2.7-28-1.9c-11.5,0.9-22.5,4-33.5,6.8
		c-11.7,2.9-23.2,2.8-34.3-2.1c-16.9-7.4-27.8-20.1-30-38.5c-2.4-20.6,4.4-38.3,20.4-51.8c7.2-6.1,14.2-12.3,20.4-19.5
		c7.5-8.6,13.8-18,19.5-27.9c7.8-13.8,19-23.5,34.5-27.7c17.5-4.7,35.1,1.9,45.3,17.1c8.5,12.6,18.2,24.1,28.6,35.1
		c8.1,8.5,16.3,16.8,24.4,25.3c7.1,7.4,13.1,15.6,15.6,25.6c4,16.1,2.3,31.5-7.2,45.4c-5.3,7.8-13.1,12.1-22.1,14.5
		C313.9,394.4,302.3,395.6,294.5,395.5z'/>
	<path id='XMLID_8_' d='M94.6,234c0.2-14.5,3.6-28.2,11.6-40.4c2.3-3.5,5.1-6.7,8.6-9c7.2-4.7,15.1-4.3,22.2,0.7
		c7.8,5.4,13.5,12.7,18.7,20.4c6.5,9.5,11.5,19.8,14.6,31c3.3,11.7,3,23.3-2.1,34.5c-7.4,16.5-25.5,23.1-41.7,15.2
		c-10.5-5.1-19.1-12.5-24.8-22.8c-3.9-7-6-14.6-6.7-22.5C94.8,238.6,94.7,236.3,94.6,234z'/>
	<path id='XMLID_7_' d='M405.4,234.3c-0.6,4.7-0.9,9.4-1.8,13.9c-2.7,13.7-10,24.5-21.2,32.6c-5.1,3.7-10.6,6.8-16.9,8.2
		c-8.9,1.9-17,0.1-24.3-5.4c-6.5-5-10.4-11.8-12.4-19.7c-2.7-10.9-1.7-21.5,2-32c5.3-15.1,13.4-28.5,24.3-40.1
		c3.7-4,7.9-7.4,13.2-9.3c6.5-2.4,12.4-1.1,17.8,3.1c6.7,5.2,10.5,12.5,13.7,20.2C403.5,214.8,405,224.6,405.4,234.3z'/>
	<path id='XMLID_6_' d='M226.4,216.5c1.2-1.2,2.4-2.5,3.7-4.1c0.1-0.2,0.3-0.3,0.4-0.5c0.1-0.1,0.2-0.2,0.3-0.4
		c0.1-0.1,0.2-0.2,0.3-0.3c0-0.1,0.1-0.1,0.1-0.2c8.7-11.8,11.8-25.3,11-39.7c-0.7-12.3-3.6-24.2-6.7-36.1
		c-2.2-8.2-5.1-16.1-9.8-23.2c-3.1-4.8-6.9-8.9-12.8-10.1c-8.6-1.8-16.4,0.7-22.9,6.3c-13,11-21.9,25-27.6,41
		c-4.3,12-5.3,24.3-1.8,36.6c3.8,13.5,10.6,25.1,22.3,33.5c9.7,6.9,21.7,8.5,32.3,4.4l0,0c0,0,0,0,0,0c1-0.4,1.9-0.8,2.9-1.3
		c1.8-0.9,3.5-1.8,5.2-3C224.4,218.3,225.7,217.3,226.4,216.5z'/>
	<path id='XMLID_5_' d='M339.8,157.9c-3.8-16.3-11.4-30.8-22.7-43.3c-4.9-5.4-10.6-9.5-17.6-11.7c-11.2-3.6-19.1-0.7-25.4,9.1
		c-4,6.2-6.9,12.9-8.8,20c-2.3,8.7-4.1,17.6-6,26.4c-2.8,12.9-2.6,25.6,1.7,38.2c3.5,10.3,9.3,19.1,18.9,24.6
		c12.6,7.2,25,5.9,36.8-2c0.1-0.1,0.3-0.1,0.4-0.2c0.8-0.5,1.8-1.1,2.7-1.9c0.7-0.7,1.1-1,1.4-1.3c4.8-4.2,8.7-9.1,11.7-14.7
		C340.4,187.6,343.4,173.2,339.8,157.9z'/>
</g>
</svg>
  );
}

function FeatherIcon({ className }: IconProps): JSX.Element {
  return (
    <svg
      className={cn('fill-current', className)}
      viewBox='0 0 24 24'
      aria-hidden='true'
    >
      <g>
        <path d='M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z' />
      </g>
    </svg>
  );
}

function SpinnerIcon({ className }: IconProps): JSX.Element {
  return (
    <svg
      className={cn('animate-spin', className)}
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
    >
      <circle
        className='opacity-25'
        cx='12'
        cy='12'
        r='10'
        stroke='currentColor'
        strokeWidth='4'
      />
      <path
        className='opacity-75'
        fill='currentColor'
        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
      />
    </svg>
  );
}

function GoogleIcon({ className }: IconProps): JSX.Element {
  return (
    <svg
      className={className}
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 48 48'
    >
      <g>
        <path
          fill='#EA4335'
          d='M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z'
        />
        <path
          fill='#4285F4'
          d='M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z'
        />
        <path
          fill='#FBBC05'
          d='M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z'
        />
        <path
          fill='#34A853'
          d='M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z'
        />
        <path fill='none' d='M0 0h48v48H0z' />
      </g>
    </svg>
  );
}

function AppleIcon({ className }: IconProps): JSX.Element {
  return (
    <svg className={className} viewBox='0 0 24 24'>
      <g>
        <path d='M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z' />
      </g>
    </svg>
  );
}

function TriangleIcon({ className }: IconProps): JSX.Element {
  return (
    <svg className={className} viewBox='0 0 24 24' aria-hidden='true'>
      <g>
        <path d='M12.538 6.478c-.14-.146-.335-.228-.538-.228s-.396.082-.538.228l-9.252 9.53c-.21.217-.27.538-.152.815.117.277.39.458.69.458h18.5c.302 0 .573-.18.69-.457.118-.277.058-.598-.152-.814l-9.248-9.532z' />
      </g>
    </svg>
  );
}

function PinIcon({ className }: IconProps): JSX.Element {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      strokeWidth='2'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4' />
      <line x1='9' y1='15' x2='4.5' y2='19.5' />
      <line x1='14.5' y1='4' x2='20' y2='9.5' />
    </svg>
  );
}

function PinOffIcon({ className }: IconProps): JSX.Element {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      strokeWidth='2'
      stroke='currentColor'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <line x1='3' y1='3' x2='21' y2='21' />
      <path d='M15 4.5l-3.249 3.249m-2.57 1.433l-2.181 .818l-1.5 1.5l7 7l1.5 -1.5l.82 -2.186m1.43 -2.563l3.25 -3.251' />
      <line x1='9' y1='15' x2='4.5' y2='19.5' />
      <line x1='14.5' y1='4' x2='20' y2='9.5' />
    </svg>
  );
}
