import { COLORs, FONT_SIZE } from "../../constants/theme.js"

export const styles = {
  container: {
    backgroundColor: COLORs.background,
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },

  scrollContent: {
    paddingBottom: 100,
    paddingTop: 20,
  },

  header: {
    marginBottom: 16,
    paddingHorizontal: 4,
  },

  headerTitle: {
    fontSize: FONT_SIZE.lg,
    color: COLORs.textPrimary,
    fontWeight: "700",
  },

  editButton: {
    alignSelf: "flex-end",
    marginBottom: 16,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: COLORs.surface,
    borderRadius: 8,
  },

  editButtonText: {
    color: COLORs.primary,
    fontSize: FONT_SIZE.sm,
    fontWeight: "600",
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

  itemTitle: {
    fontSize: FONT_SIZE.sm,
    color: COLORs.textSecondary,
    marginBottom: 4,
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },

  itemText: {
    fontSize: FONT_SIZE.md,
    color: COLORs.textPrimary,
    fontWeight: "600",
  },

  editItem: {
    marginBottom: 12,
  },

  label: {
    fontSize: FONT_SIZE.sm,
    color: COLORs.textSecondary,
    marginBottom: 4,
  },

  input: {
    backgroundColor: COLORs.surface,
    borderWidth: 1,
    borderColor: COLORs.border,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    color: COLORs.textPrimary,
    fontSize: FONT_SIZE.md,
  },

  row: {
    flexDirection: "row",
  },

  buttonRow: {
    flexDirection: "row",
    marginTop: 16,
    marginBottom: 16,
  },

  cancelBtn: {
    flex: 1,
    marginRight: 6,
    backgroundColor: COLORs.surface,
    borderWidth: 1,
    borderColor: COLORs.border,
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  cancelBtnText: {
    color: COLORs.textSecondary,
    fontSize: 12,
    fontWeight: "500",
  },

  saveBtn: {
    flex: 1,
    marginLeft: 6,
  },

  passwordToggle: {
    marginVertical: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: COLORs.surface,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORs.border,
  },

  passwordToggleText: {
    color: COLORs.primary,
    fontSize: FONT_SIZE.sm,
    fontWeight: "600",
    textAlign: "center",
  },

  changePasswordBtn: {
    marginBottom: 16,
  },

  logoutArea: {
    marginTop: 8,
  },
}