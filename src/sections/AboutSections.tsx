import {  Typography, alpha } from "@mui/material";
import { styled } from "@mui/material/styles";
import { HoverCard, IconBadge, MutedText } from "@components/ui/StyledCard";
import { StatCard, StatValue } from "@components/ui/Tags";
import { ThumbUpOutlined } from "@mui/icons-material";

// Custom styled component for the full-width story card
export const StoryCard = styled(HoverCard)(({ theme }) => ({
  marginTop: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: theme.spacing(2),
  background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.background.paper, 1)} 100%)`,
}));

export const ValueItem = ({ title, desc }: { title: string; desc: string }) => (
  <HoverCard sx={{ height: '100%' }}>
    <IconBadge sx={{ mb: 2, bgcolor: (theme) => alpha(theme.palette.secondary.main, 0.1), color: 'secondary.main' }}>
      <ThumbUpOutlined />
    </IconBadge>
    <Typography variant="subtitle1" fontWeight="700" gutterBottom>{title}</Typography>
    <MutedText variant="body2">{desc}</MutedText>
  </HoverCard>
);

export const AchievementCard = ({ label, value }: { label: string; value: string }) => (
  <StatCard sx={{ py: 4 }}>
    <StatValue variant="h4" color="primary.main" fontWeight="800">
      {value}
    </StatValue>
    <Typography variant="body2" color="text.secondary" fontWeight="500">
      {label}
    </Typography>
  </StatCard>
);