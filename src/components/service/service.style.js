import { COLORs, FONT_SIZE } from "../../constants/theme.js"

export const styles = {
  service: {
    backgroundColor: COLORs.surface,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORs.border,
  },

  containerText: {
    flex: 1,
    paddingRight: 12,
  },

  containerButton: {
    width: 110,
  },

  description: {
    fontSize: FONT_SIZE.md,
    color: COLORs.textPrimary,
    fontWeight: "500",
    marginBottom: 6,
  },

  price: {
    fontSize: FONT_SIZE.sm,
    color: COLORs.primary,
    fontWeight: "700",
  },
}