import { Box, Stack } from "@mui/material"
import TelegramIcon  from "@mui/icons-material/Telegram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";

const Footer = () => {
  return (
    <Stack className={"footer-container"}>
        <Stack className={"main"}>
            <Stack className={"left"}>
                <Box component={"div"} className={"footer-box"}>
                    <img src="/img/logo/logoWhite.svg" alt="" className={"logo"}/>
                </Box>
                <Box component={"div"} className={"footer-box"}>
                    <span>total free customer care</span>
                    <p>+82104444454</p>
                </Box>
                <Box component={"div"} className={"footer-box"}>
                    <span>nee live</span>
                    <p>+82104444454</p>
                    <span> Support?</span>
                </Box>
                <Box component={"div"} className={"footer-box"}>
                    <span>follow us on social media</span>
                    <div className={"media-box"}>
                        <Link href={"https://facebook.com"}>
                          <FacebookOutlinedIcon />
                        </Link>
                        <Link href={"https://telegram.com"}>
                          <TelegramIcon />
                        </Link>
                        <Link href={"https://instagram.com"}>
                          <InstagramIcon />
                        </Link>
                        <Link href={"https://twitter.com"}>
                          <TwitterIcon />
                        </Link>
                    </div>
                </Box>
            </Stack>
            <Stack className={"right"}>
                <Box component={"div"} className={"top"}>
                    <strong>keep yourself up to date</strong>
                    <div>
                        <input type="text" placeholder={"Your Email"}/>
                        <span>Subscribe</span>
                    </div>
                </Box>
                <Box component={"div"} className={"bottom"}>
                    <div>
                        <strong>Popular Search</strong>
                        <span>Property for Rent</span>
                        <span>Property Low to hide</span>
                    </div>
                    <div>
                        <strong>Quick Links</strong>
                        <span>Terms of Use</span>
                        <span>Privacy Polisy</span>
                        <span>Privacing Plans</span>
                        <span>Our Service</span>
                        <span>Contact Support</span>
                        <span>FAQs</span>
                    </div>
                    <div>
                        <strong>Discover</strong>
                        <span>Seoul</span>
                        <span>Gyeongido</span>
                        <span>Busan</span>
                        <span>Jejudo</span>
                    </div>
                </Box>
            </Stack>
        </Stack>
        <Stack className={"second"}>
            <span>© Nestar - All rights reserved. Nestar 2025</span>
            <span>Privacy · Terms · Sitemap</span>
        </Stack>
    </Stack>
  );
};

export default Footer;