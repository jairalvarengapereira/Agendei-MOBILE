import { COLORs, FONT_SIZE } from "../../constants/theme.js"

export const styles = {
  container: {
    backgroundColor: COLORs.background,
    flex: 1,
  },

  header: {
    backgroundColor: COLORs.surface,
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: COLORs.border,
  },

  subtitle: {
    fontSize: FONT_SIZE.sm,
    color: COLORs.textSecondary,
    marginBottom: 4,
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },

  title: {
    fontSize: FONT_SIZE.lg,
    color: COLORs.textPrimary,
    fontWeight: "700",
    marginBottom: 8,
  },

  count: {
    fontSize: FONT_SIZE.sm,
    color: COLORs.primary,
  },

  doctorItem: {
    backgroundColor: COLORs.surface,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginHorizontal: 16,
    marginTop: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: COLORs.border,
  },

  doctorIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORs.surfaceLight,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },

  doctorIconText: {
    fontSize: 24,
  },

  doctorInfo: {
    flex: 1,
  },

  doctorName: {
    fontSize: FONT_SIZE.md,
    color: COLORs.textPrimary,
    fontWeight: "600",
    marginBottom: 4,
  },

  doctorSpecialty: {
    fontSize: FONT_SIZE.sm,
    color: COLORs.primary,
  },

  doctorArrow: {
    fontSize: 24,
    color: COLORs.textSecondary,
  },

  empty: {
    alignItems: "center",
    paddingVertical: 40,
    paddingHorizontal: 20,
  },

  emptyText: {
    fontSize: FONT_SIZE.md,
    color: COLORs.textSecondary,
    textAlign: "center",
  },
}