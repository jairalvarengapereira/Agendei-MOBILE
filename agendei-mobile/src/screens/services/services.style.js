import { COLORs, FONT_SIZE } from "../../constants/theme.js"

export const styles = {
  container: {
    backgroundColor: COLORs.background,
    flex: 1,
  },

  banner: {
    backgroundColor: COLORs.surface,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 24,
    paddingBottom: 28,
    borderBottomWidth: 2,
    borderBottomColor: COLORs.primary,
  },

  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: COLORs.primary,
  },

  name: {
    fontSize: FONT_SIZE.lg,
    color: COLORs.textPrimary,
    fontWeight: "700",
    marginTop: 10,
    letterSpacing: 0.3,
  },

  specialty: {
    fontSize: FONT_SIZE.sm,
    color: COLORs.primary,
    marginTop: 4,
    letterSpacing: 0.5,
  },
}