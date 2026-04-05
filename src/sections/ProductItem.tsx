// @ts-nocheck
import { useState } from "react";
import { Box, Typography, Button, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";
import { MutedText, Pill } from "@components/ui/StyledCard";
import { StatRow, StatCard, StatValue } from "@components/ui/Tags";
import { OpenInNewOutlined, KeyboardArrowDownOutlined } from "@mui/icons-material";

// --- STYLED COMPONENTS ---

const StyledCard = styled(motion.div)(() => ({
  background: "#fff",
  borderRadius: "24px",
  border: "1px solid #eaeaea",
  overflow: "hidden",
  position: "relative",
  cursor: "pointer",
  boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
}));

const ImageBox = styled(Box)({
  width: "100%",
  height: "240px",
  overflow: "hidden",
  position: "relative",
  backgroundColor: "#f0f0f0", // Fallback color if image fails
});

const ProductImg = styled(motion.img)({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
});

const DetailsContainer = styled(motion.div)({
  overflow: "hidden",
});

// --- COMPONENT ---

interface ProductProps {
  title: string;
  subtitle: string;
  tone: string;
  features: string[];
  tags: string[];
  metrics: { label: string; value: string }[];
  buttonText: string;
  imageUrl: string; // Changed name to imageUrl for clarity
}

export const ProductItem = ({ 
  title, subtitle, tone, features, tags, metrics, buttonText, imageUrl 
}: ProductProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledCard
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      {/* 1. THE IMAGE SECTION */}
      <ImageBox>
        <ProductImg 
          src={imageUrl} 
          alt={title}
          animate={{ scale: isOpen ? 1.1 : 1 }}
          transition={{ duration: 0.6 }}
          // Error handling: If image fails, this ensures the box doesn't collapse
          onError={(e: any) => { e.target.src = "https://via.placeholder.com/800x450?text=Image+Not+Found"; }}
        />
        <div style={{ position: "absolute", top: "12px", left: "12px", display: "flex", gap: "8px" }}>
          {tags.map(t => (
            <Pill key={t} sx={{ bgcolor: 'rgba(255,255,255,0.9)', color: '#000' }}>{t}</Pill>
          ))}
        </div>
      </ImageBox>

      {/* 2. TEXT CONTENT */}
      <div style={{ padding: "24px" }}>
        <Typography variant="h5" fontWeight="900">{title}</Typography>
        <MutedText variant="body2">{subtitle}</MutedText>

        {/* 3. ANIMATED REVEAL (Career Style) */}
        <AnimatePresence>
          {isOpen && (
            <DetailsContainer
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div style={{ paddingTop: "16px", display: "grid", gap: "16px" }}>
                <Divider />
                <div>
                  {features.map((f, i) => (
                    <Typography key={i} variant="body2" color="text.secondary" sx={{ py: 0.2 }}>
                      • {f}
                    </Typography>
                  ))}
                </div>

                <StatRow>
                  {metrics.map((m) => (
                    <StatCard key={m.label} sx={{ bgcolor: '#f8f9fa', flex: 1, textAlign: 'center', p: 1 }}>
                      <StatValue variant="subtitle2" sx={{ color: tone, fontWeight: 800 }}>{m.value}</StatValue>
                      <Typography variant="caption" sx={{ fontSize: '0.6rem' }}>{m.label}</Typography>
                    </StatCard>
                  ))}
                </StatRow>

                <Button 
                  variant="contained" 
                  fullWidth 
                  sx={{ bgcolor: tone, borderRadius: '12px', fontWeight: 700, py: 1.2 }}
                  endIcon={<OpenInNewOutlined />}
                >
                  {buttonText}
                </Button>
              </div>
            </DetailsContainer>
          )}
        </AnimatePresence>

        {!isOpen && (
          <div style={{ textAlign: "center", marginTop: "8px", color: "#ccc" }}>
            <KeyboardArrowDownOutlined />
          </div>
        )}
      </div>
    </StyledCard>
  );
};
