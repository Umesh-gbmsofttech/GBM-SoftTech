import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const MotionBox = motion(Box);

export const PageTransition = styled(MotionBox)(() => ({}));

export const pageVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 }
};
