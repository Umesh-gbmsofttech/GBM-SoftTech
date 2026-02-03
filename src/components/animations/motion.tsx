import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const MotionSection = motion(Box);

export const FadeInUp = styled(MotionSection)(() => ({}));

export const fadeInUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export const staggerVariant = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 }
  }
};
