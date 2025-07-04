import { Box, Stack } from "@mui/material";




const TopAgentCard = () => {
    return (
        <Stack className={"top-agent-card"}>
            <img src="/img/banner/agent.jpeg" alt=""/>
            <strong className={"title"}> Aras</strong>
            <p className={"desc"}> AGENT </p>
        </Stack>
    );
//     return (
//         <Stack className={"card-wrapper"}>
//             <Box className={"top agents-swiper"}>
//                 <div className={"top-agents-slide"}>
//                     <div className={"top-agent-card"}>
//                         <img src="/img/banner/agents.jpeg" alt=""/>
//                         <strong className={"title"}> Anna</strong>
//                         <p className={"desc"}> AGENT </p>
//                     </div>
//                 </div>
//             </Box>
//         </Stack>
//     );
};


export default TopAgentCard;