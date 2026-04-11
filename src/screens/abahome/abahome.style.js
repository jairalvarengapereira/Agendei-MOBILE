import { COLORs, FONT_SIZE } from "../../constants/theme.js"

export const styles = {
  container: {
    backgroundColor: COLORs.background,
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },

  header: {
    marginBottom: 24,
    paddingHorizontal: 4,
  },

  greeting: {
    fontSize: FONT_SIZE.sm,
    color: COLORs.textSecondary,
    marginBottom: 4,
  },

  text: {
    fontSize: FONT_SIZE.lg,
    color: COLORs.textPrimary,
    fontWeight: "700",
    letterSpacing: 0.3,
  },

  accent: {
    color: COLORs.primary,
  },

  serviceItem: {
    backgroundColor: COLORs.surface,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORs.border,
  },

  serviceContent: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },

  serviceIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORs.surfaceLight,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },

  serviceIconText: {
    fontSize: FONT_SIZE.lg,
    color: COLORs.primary,
    fontWeight: "700",
  },

  serviceDescription: {
    fontSize: FONT_SIZE.md,
    color: COLORs.textPrimary,
    fontWeight: "500",
    flex: 1,
  },

  serviceArrow: {
    fontSize: 24,
    color: COLORs.textSecondary,
  },
}