import { COLORs, FONT_SIZE } from "../../constants/theme"

export const styles = {
  doctor: {
    backgroundColor: COLORs.surface,
    padding: 14,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORs.border,
    marginTop: 6,
    marginBottom: 6,
    borderRadius: 16,
  },

  iconWrapper: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: COLORs.surfaceLight,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
    borderWidth: 1,
    borderColor: COLORs.border,
  },

  icon: {
    width: 36,
    height: 36,
  },

  name: {
    fontSize: FONT_SIZE.md,
    color: COLORs.textPrimary,
    fontWeight: "600",
    marginBottom: 4,
  },

  specialty: {
    fontSize: FONT_SIZE.sm,
    color: COLORs.white,
    letterSpacing: 0.3,
  },

  arrow: {
    marginLeft: "auto",
    fontSize: FONT_SIZE.lg,
    color: COLORs.textSecondary,
  },
}