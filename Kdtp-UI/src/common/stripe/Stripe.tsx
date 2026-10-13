import { Box } from "@mui/material";
import styles from "./styles.ts";
import type { DsColor } from "../../ds/color.ts";

type StripeProps = {
  text: string;
  color: DsColor;
  top?: boolean;
};

export const Stripe = ({ text, color, top }: StripeProps) => {
  const repeatedText = Array.from({ length: 10 });

  return (
    <Box sx={styles.container(color, top)}>
      <Box sx={styles.track(top)}>
        {[0, 1].map((group) => (
          <Box key={group} sx={styles.textGroup}>
            {repeatedText.map((_, index) => (
              <Box key={index} component="span" sx={styles.textItem}>
                {text} ★
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};
