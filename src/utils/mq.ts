import { breakpointSizes } from './constants';

const breakpoints = [breakpointSizes.xs, breakpointSizes.sm, breakpointSizes.md, breakpointSizes.lg, breakpointSizes.xl];

const Breakpoints = {
    xs: 0,
    sm: 1,
    md: 2,
    lg: 3,
    xl: 4,
};

type TTypes = 'width' | 'height';

const step = 0.05;

function down(breakPoint: number, type: TTypes = 'width') {
    if (type === 'width') return `@media screen and (max-width: ${breakpoints[breakPoint] - step}px)`;
    else if (type === 'height') return `@media screen and (max-height: ${breakpoints[breakPoint] - step}px)`;
}

function up(breakPoint: number, type: TTypes = 'width') {
    if (type === 'width') return `@media screen and (min-width: ${breakpoints[breakPoint] + step}px)`;
    else if (type === 'height') return `@media screen and (min-height: ${breakpoints[breakPoint] + step}px)`;
}

export { up, down, Breakpoints };
