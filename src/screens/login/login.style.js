import { COLORs, FONT_SIZE } from "../../constants/theme.js"

export const styles = {
  container: {
    backgroundColor: COLORs.background,
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingVertical: 40,
  },

  headerArea: {
    alignItems: "center",
    marginTop: 60,
    marginBottom: 40,
  },

  subtitle: {
    fontSize: FONT_SIZE.md,
    color: COLORs.textSecondary,
    marginTop: 16,
    letterSpacing: 0.5,
    textAlign: "center",
  },

  logo: {
    width: 180,
    height: 60,
    resizeMode: "contain",
  },

  formArea: {
    width: "100%",
    gap: 16,
  },

  label: {
    fontSize: FONT_SIZE.sm,
    color: COLORs.textPrimary,
    marginBottom: 8,
    marginLeft: 4,
    fontWeight: "600",
  },

  containerInput: {
    marginBottom: 8,
    width: "100%",
  },

  input: {
    backgroundColor: COLORs.surfaceLight,
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORs.border,
    color: COLORs.textPrimary,
    fontSize: FONT_SIZE.md,
    width: "100%",
  },

  inputFocused: {
    borderColor: COLORs.primary,
    borderWidth: 2,
  },

  footer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 32,
    paddingBottom: 20,
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