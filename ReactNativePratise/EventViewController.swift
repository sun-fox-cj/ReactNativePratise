//
//  EventViewController.swift
//  ReactNativePratise
//
//  Created by jie Chi on 16/2/3.
//  Copyright © 2016年 com.gozap. All rights reserved.
//

import UIKit

class EventViewController: UIViewController {

    @IBOutlet weak var centerView: UIView!
    let manager = CalendarManager()
    
    override func viewDidLoad() {
        super.viewDidLoad()

        let jsCodeLocation = NSURL(string: "http://localhost:8081/Resource/event.ios.bundle")
        
        let rootView = RCTRootView(bundleURL: jsCodeLocation, moduleName: "EventTouch", initialProperties: nil, launchOptions: nil)
        
        centerView.addSubview(rootView)
        rootView.frame = centerView.bounds
    }
    
    override func viewWillAppear(animated: Bool) {
        super.viewWillAppear(animated)
        
        navigationController?.navigationBarHidden = true
    }
    
    override func viewWillDisappear(animated: Bool) {
        super.viewWillDisappear(animated)
        
        navigationController?.navigationBarHidden = false
    }
    
    @IBAction func jsEvent(sender: AnyObject) {
        
        manager.launchEvent()
    }
    
    
}
