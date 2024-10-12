<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Create admin role
        $admin = Role::create(['name' => 'admin']);
        $admin->givePermissionTo(Permission::all());

        // Create pengurus role
        $pengurus = Role::create(['name' => 'pengurus']);
        $pengurus->givePermissionTo('view dashboard');

        // Create user role
        $user = Role::create(['name' => 'user']);
    }
}
