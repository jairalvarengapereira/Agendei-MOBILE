import { COLORs, FONT_SIZE } from "../../constants/theme.js"

export const styles = {
  service: {
    backgroundColor: COLORs.surface,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: COLORs.border,
  },

  containerText: {
    flex: 1,
    paddingRight: 12,
  },

  containerButton: {
    width: 70,
  },

  description: {
    fontSize: FONT_SIZE.sm,
    color: COLORs.textPrimary,
    fontWeight: "500",
    marginBottom: 4,
  },

  price: {
    fontSize: FONT_SIZE.xsm,
    color: COLORs.primaryDim,
    fontWeight: "700",
  },
}