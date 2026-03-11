<?php

namespace App\Providers;

use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot()
{
    // Cek apakah aplikasi berjalan di lingkungan Vercel
    if (env('APP_ENV') === 'production') {
        app()->useStoragePath('/tmp');
    }
}
}
