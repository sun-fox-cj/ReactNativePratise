//
//  ViewController.swift
//  ReactNativePratise
//
//  Created by Cjfire on 16/1/30.
//  Copyright © 2016年 com.gozap. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

  override func viewDidLoad() {
    super.viewDidLoad()
    // Do any additional setup after loading the view, typically from a nib.
    
    let jsCodeLocation = NSURL(string: "http://localhost:8081/Resource/index.ios.bundle")
    
    let rootView = RCTRootView(bundleURL: jsCodeLocation, moduleName: "SimpleApp", initialProperties: nil, launchOptions: nil)

    view.addSubview(rootView)
    rootView.frame = view.bounds
  }

  override func didReceiveMemoryWarning() {
    super.didReceiveMemoryWarning()
    // Dispose of any resources that can be recreated.
  }


}

