#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

// https://crates.io/crates/user-idle
use user_idle::UserIdle;

// https://tauri.app/v1/guides/features/command
#[tauri::command]
fn user_iddle() -> String {
  let idle = UserIdle::get_time().unwrap();
  println!("---");

  "Hello from Rust!".into()
}

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![user_iddle])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");

}
