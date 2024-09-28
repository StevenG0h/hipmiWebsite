<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('shops', function (Blueprint $table) {
            $table->id();
            $table->string('name', 50);
            $table->string('payment_gateway_key', 255);
            $table->string('courier_payment_gateway_markup', 255);
            $table->string('invoice_prefix', 255);
            $table->string('profile_image', 255);
            $table->string('province', 255);
            $table->string('city', 255);
            $table->string('phone_number', 255);
            $table->string('bank_account_number', 255);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('shops');
    }
};
