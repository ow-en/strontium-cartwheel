import siteFonts from "./site-fonts.css"

export default {
  //
  // Change information to your own:
  //
  // Site Info:
  title: "Site Test Title",
  description: "This is a test description.",
  siteUrl: "https://www.caulfield.dev",
  footerText: "**2018**<br><br>Test Footer.", // You can use Markdown markup here

  // Blog Author Info:
  author: "Owen Caulfield",
  authorImage:
    "https://pbs.twimg.com/profile_images/986603715732934656/7A4Nt68k_400x400.jpg",
  authorBio: "Test author bio.", // You can use Markdown markup here
  social: {
    twitter: "caulfieldOwen",
    github: "ow-en",
    reddit: "broadsafe",
  },

  // Services:
  googleAnalyticsTrackingId: `ADD YOUR TRACKING ID HERE`,

  // Site Style:
  lightTheme: "grommet", // grommet | dark | base | dxc | aruba
  // leave darkTheme blank if you don’t need a theme switch
  darkTheme: "dark", // '' | grommet | dark | base | dxc | aruba
  font: "scto-grotesk-a-regular", // Roboto
  fontHeadings: "scto-grotesk-a-medium", // Merriweather
  brandColor: "", // #7D4CDB
}
