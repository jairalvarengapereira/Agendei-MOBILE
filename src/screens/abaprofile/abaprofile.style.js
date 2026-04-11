import { COLORs, FONT_SIZE } from "../../constants/theme.js"

export const styles = {
  container: {
    backgroundColor: COLORs.background,
    flex: 1,
    paddingHorizontal: 16,
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
    marginTop: 20,
    marginBottom: 20,
  },

  cancelBtn: {
    flex: 1,
    marginRight: 8,
    backgroundColor: COLORs.surface,
    borderWidth: 1,
    borderColor: COLORs.border,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
  },

  cancelBtnText: {
    color: COLORs.textSecondary,
    fontSize: FONT_SIZE.md,
    fontWeight: "600",
  },

  saveBtn: {
    flex: 1,
    marginLeft: 8,
  },

  logoutArea: {
    marginTop: 8,
  },
}