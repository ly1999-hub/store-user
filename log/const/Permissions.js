const   PermissionRoleView = "role_view"
const	PermissionRoleEdit = "role_edit"

const	PermissionOrderView = "order_view"
const	PermissionOrderEdit = "order_edit"

const	PermissionWarehouseView = "warehouse_view"
const	PermissionWarehouseEdit = "warehouse_edit"

const	PermissionUserView = "user_view"
const	PermissionUserEdit = "user_edit"
	
module.exports.Permissions=[{
    Name: "Role view",
    Code: PermissionRoleView,
    },
    {
        Name: "Role edit",
        Code: PermissionRoleEdit,
    },
    {
        Name: "Order view",
        Code: PermissionOrderView,
    },
    {
        Name: "Order edit",
        Code: PermissionOrderEdit,
    },

    // Warehouse
    {
        Name: "Warehouse view",
        Code: PermissionWarehouseView,
    },
    {
        Name: "Warehouse edit",
        Code: PermissionWarehouseEdit,
    },

    // User
    {
        Name: "User view",
        Code: PermissionUserView,
    },
    {
        Name: "User edit",
        Code: PermissionUserEdit,
    },
]
