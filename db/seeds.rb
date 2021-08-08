Role.delete_all
User.delete_all
# Default role
admin_role = Role.create name: 'ADMIN'
staff_role = Role.create name: 'STAFF'
# Default user
admim_user = admin_role.users.create name: 'ADMIN', email: 'sysadmin@our-order.com', phone_number: '0347336981'
staff_user = staff_role.users.create name: 'STAFF', email: 'staff@our-order.com', phone_number: '0347336982'
