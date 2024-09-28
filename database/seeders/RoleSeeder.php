<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
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
        $superadmin = Role::create(['name' => 'admin']);
        $superadmin->givePermissionTo(Permission::all());

        // Create pengurus role
        $superadmin = Role::create(['name' => 'pengurus']);
        $superadmin->givePermissionTo('view dashboard');
    }
}
