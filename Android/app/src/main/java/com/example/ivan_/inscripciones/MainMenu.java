package com.example.ivan_.inscripciones;

import android.support.v4.widget.DrawerLayout;
import android.support.v7.app.ActionBarDrawerToggle;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

public class MainMenu extends AppCompatActivity {

  private DrawerLayout mDrawerLayout;
  private ActionBarDrawerToggle mToggle;

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main_menu);
    mDrawerLayout=(DrawerLayout) findViewById(R.id.drawer);
    mToggle = new ActionBarDrawerToggle(MainMenu.this, mDrawerLayout,R.string.open, R.string.close);
    mDrawerLayout.addDrawerListener(mToggle);
    mToggle.syncState();
    getSupportActionBar().setDisplayShowHomeEnabled(true);

  }
}
