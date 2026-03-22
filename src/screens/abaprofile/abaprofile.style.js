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
  },

  item: {
    backgroundColor: COLORs.surface,
    borderWidth: 1,
    borderColor: COLORs.border,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 16,
    marginBottom: 12,
    borderRadius: 16,
  },

  title: {
    fontSize: FONT_SIZE.sm,
    color: COLORs.textSecondary,
    marginBottom: 4,
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },

  text: {
    fontSize: FONT_SIZE.md,
    color: COLORs.textPrimary,
    fontWeight: "600",
  },

  logoutArea: {
    marginTop: 8,
  },
}