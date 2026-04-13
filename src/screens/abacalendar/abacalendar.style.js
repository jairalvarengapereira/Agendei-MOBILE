import { COLORs, FONT_SIZE } from "../../constants/theme.js"

export const styles = {
  container: {
    backgroundColor: COLORs.background,
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },

  header: {
    marginBottom: 20,
    paddingHorizontal: 4,
  },

  title: {
    fontSize: FONT_SIZE.lg,
    color: COLORs.textPrimary,
    fontWeight: "700",
    letterSpacing: 0.3,
  },

  subtitle: {
    fontSize: FONT_SIZE.sm,
    color: COLORs.textSecondary,
    marginTop: 4,
  },
}