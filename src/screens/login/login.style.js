import { COLORs, FONT_SIZE } from "../../constants/theme.js"

export const styles = {
  container: {
    backgroundColor: COLORs.background,
    justifyContent: "space-between",
    flexGrow: 1,
    alignItems: "center",
    paddingHorizontal: 32,
    paddingVertical: 50,
  },

  headerArea: {
    alignItems: "center",
    marginTop: 20,
  },

  subtitle: {
    fontSize: FONT_SIZE.sm,
    color: COLORs.textSecondary,
    marginTop: 12,
    letterSpacing: 0.5,
  },

  logo: {
    width: 200,
    height: 64,
  },

  formArea: {
    width: "100%",
    gap: 0,
  },

  label: {
    fontSize: FONT_SIZE.xsm,
    color: COLORs.textSecondary,
    marginBottom: 6,
    marginLeft: 2,
    letterSpacing: 0.8,
    textTransform: "uppercase",
  },

  containerInput: {
    marginBottom: 20,
    width: "100%",
  },

  input: {
    backgroundColor: COLORs.surfaceAlt,
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORs.border,
    color: COLORs.textPrimary,
    fontSize: FONT_SIZE.md,
    width: "100%",
  },

  footer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingBottom: 8,
  },

  footerText: {
    color: COLORs.textSecondary,
    fontSize: FONT_SIZE.sm,
  },

  footerLink: {
    color: COLORs.primary,
    fontSize: FONT_SIZE.sm,
    fontWeight: "600",
  },
}