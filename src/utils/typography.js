import Typography from "typography"
import fairyGatesTheme from "typography-theme-fairy-gates"

const typography = new Typography({
    ...fairyGatesTheme,
    baseFontSize: "16px",
});

// Export helper functions
export const { scale, rhythm, options } = typography;
export default typography;