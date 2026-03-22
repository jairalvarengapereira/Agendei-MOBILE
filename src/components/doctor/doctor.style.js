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
    shadowColor: COLORs.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },

  iconWrapper: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: COLORs.surfaceAlt,
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
    color: COLORs.primary,
    letterSpacing: 0.3,
  },

  arrow: {
    marginLeft: "auto",
    fontSize: FONT_SIZE.lg,
    color: COLORs.textSecondary,
  },
}