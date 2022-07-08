/*
 * ***********************************************************************
 * Compass Logon CONFIDENTIAL
 * ___________________
 *
 * Copyright 2022 Compass Logon.
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains the property
 * of Compass Logon and its suppliers, if any. The intellectual and
 * technical concepts contained herein are proprietary to Compass Logon
 * and its suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Compass Logon.
 * ***********************************************************************
 */

package com.compasslogon.core.models.impl;

import com.compasslogon.core.models.Form;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = {
    SlingHttpServletRequest.class
}, adapters = Form.class, resourceType = "compasslogon/components/content/form")
public class FormImpl
    implements Form
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String height;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String url_variable;

    @Override
    public String getHeight() {
        return height;
    }

    @Override
    public String getUrl_variable() {
        return url_variable;
    }

}
