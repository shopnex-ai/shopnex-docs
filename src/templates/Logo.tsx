

export const Logo = ({ neutral }: { neutral?: boolean }) => (
    <div className='flex items-center text-xl font-semibold'>
        <svg width='50' viewBox='0 0 200 150' xmlns='http://www.w3.org/2000/svg'>
            <defs>
                <linearGradient id='grad1' x1='0%' y1='0%' x2='100%' y2='0%'>
                    <stop offset='0%' style={{ stopColor: '#6366F1', stopOpacity: 1 }} />
                    <stop offset='50%' style={{ stopColor: '#A855F7', stopOpacity: 1 }} />
                    <stop offset='100%' style={{ stopColor: '#EC4899', stopOpacity: 1 }} />
                </linearGradient>
            </defs>

            <circle
                cx='100'
                cy='80'
                r='60'
                fill={neutral ? '' : 'url(#grad1)'}
                stroke={neutral ? '#D1D5DB' : 'none'} // Optional: add a stroke if you want a border when neutral
                strokeWidth={neutral ? '1' : '0'} // Make sure stroke is visible only when neutral
            />

            <polyline
                points='70,100 100,60 130,90'
                fill='none'
                stroke='white'
                strokeWidth='8'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <polygon points='130,90 125,80 135,80' fill='white' />
        </svg>
        <h1 className='font-montserrat text-2xl text-black dark:text-white'>ImproveFolio</h1>
    </div>
);
